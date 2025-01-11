import { LogLayer, TestLoggingLibrary, TestTransport } from "loglayer";
import { describe, expect, it } from "vitest";

describe("timestamp plugin", () => {
  it("should add timestamp to metadata", () => {
    // Create a test logger to capture output
    const logger = new TestLoggingLibrary();

    // Create the timestamp plugin
    const timestampPlugin = {
      id: "timestamp",
      onMetadataCalled: (metadata) => ({
        ...metadata,
        timestamp: "2024-01-01T00:00:00.000Z",
      }),
    };

    // Create LogLayer instance with the plugin
    const log = new LogLayer({
      transport: new TestTransport({
        logger,
      }),
      plugins: [timestampPlugin],
    });

    // Test the plugin by adding some metadata
    log.metadataOnly({
      message: "test message",
    });

    // Get the logged line and verify the timestamp was added
    const line = logger.popLine();
    expect(line.data[0].timestamp).toBe("2024-01-01T00:00:00.000Z");
    expect(line.data[0].message).toBe("test message");
  });

  it("should handle empty metadata", () => {
    const logger = new TestLoggingLibrary();

    const timestampPlugin = {
      id: "timestamp",
      onMetadataCalled: (metadata) => ({
        ...metadata,
        timestamp: "2024-01-01T00:00:00.000Z",
      }),
    };

    const log = new LogLayer({
      transport: new TestTransport({
        logger,
      }),
      plugins: [timestampPlugin],
    });

    log.metadataOnly({});

    const line = logger.popLine();
    expect(line.data[0].timestamp).toBe("2024-01-01T00:00:00.000Z");
  });
});
