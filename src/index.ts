import type { ILogLayer, LogLayerPlugin, LogLayerPluginParams, PluginBeforeMessageOutParams } from "@loglayer/plugin";

// LogLayerPluginParams provides the common options for the plugin
export interface TimestampPluginOptions extends LogLayerPluginParams {
  /**
   * Format of the timestamp. If not provided, uses ISO string
   */
  format?: "iso" | "locale";
}

export function createTimestampPlugin(options: TimestampPluginOptions = {}): LogLayerPlugin {
  return {
    // Copy over the common options
    id: options.id,
    disabled: options.disabled,
    // Implement the onBeforeMessageOut lifecycle method
    onBeforeMessageOut: ({ messages }: PluginBeforeMessageOutParams, loglayer: ILogLayer): string[] => {
      const timestamp = options.format === "locale" ? new Date().toLocaleString() : new Date().toISOString();

      return messages.map((msg) => `[${timestamp}] ${msg}`);
    },
  };
}
