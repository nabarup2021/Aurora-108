(function () {
  "use strict";

  const CHANNEL_PREFIX = "aurora-demo:";
  const VERSION = 1;

  function safeParse(value, fallback) {
    try {
      return value == null ? fallback : JSON.parse(value);
    } catch {
      return fallback;
    }
  }

  class DemoStore {
    constructor(namespace, initialValue) {
      if (!namespace || typeof namespace !== "string") throw new TypeError("DemoStore namespace must be a non-empty string.");
      this.namespace = namespace;
      this.key = CHANNEL_PREFIX + namespace + ":v" + VERSION;
      this.channelName = CHANNEL_PREFIX + namespace;
      this.value = safeParse(localStorage.getItem(this.key), initialValue);
      this.channel = typeof BroadcastChannel === "function" ? new BroadcastChannel(this.channelName) : null;
      this.listeners = new Set();

      this.channel?.addEventListener("message", (event) => {
        if (!event.data || event.data.type !== "state") return;
        this.value = event.data.value;
        this.emit("remote");
      });
    }

    read() {
      return structuredClone(this.value);
    }

    write(nextValue) {
      this.value = structuredClone(nextValue);
      localStorage.setItem(this.key, JSON.stringify(this.value));
      this.channel?.postMessage({type:"state", value:this.value});
      this.emit("local");
      return this.read();
    }

    update(updater) {
      const next = updater(this.read());
      return this.write(next);
    }

    subscribe(listener) {
      if (typeof listener !== "function") throw new TypeError("Listener must be a function.");
      this.listeners.add(listener);
      return () => this.listeners.delete(listener);
    }

    emit(source) {
      const snapshot = this.read();
      this.listeners.forEach((listener) => listener(snapshot, source));
    }

    reset(initialValue) {
      return this.write(initialValue);
    }

    close() {
      this.channel?.close();
      this.listeners.clear();
    }
  }

  function createRequestCache(namespace) {
    const prefix = CHANNEL_PREFIX + "cache:" + namespace + ":";
    return {
      get(key) {
        return safeParse(localStorage.getItem(prefix + key), null);
      },
      set(key, value) {
        localStorage.setItem(prefix + key, JSON.stringify(value));
      },
      remove(key) {
        localStorage.removeItem(prefix + key);
      }
    };
  }

  window.AuroraDemo = { DemoStore, createRequestCache, VERSION };
}());
