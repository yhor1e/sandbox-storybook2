//import initStoryshots, { imageSnapshot } from "@storybook/addon-storyshots";
//
//initStoryshots({ suite: "Image storyshots", test: imageSnapshot() });

import initStoryshots, {
  Stories2SnapsConverter,
  multiSnapshotWithOptions,
} from "@storybook/addon-storyshots";

initStoryshots({
  test: multiSnapshotWithOptions(),
  stories2snapsConverter: new Stories2SnapsConverter({
    snapshotsDirName: "./__snapshots__",
    snapshotExtension: ".snap.js",
  }),
});
