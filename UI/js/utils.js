let mapChunkSize = -133.5935 - -134.297

const TRIBOT_CHUNK_LENGTH = 30;
let MAP_CHUNK_LENGTH = 0.7035;

// RSArea area = new RSArea(new RSTile(3232, 3647, 0), new RSTile(3263, 3647, 0));

function convertSystem2ToSystem1(x2, y2) {
    const a = -0.0210108;
    const b = -0.0197521;
    const c = 6942.41;
    const x1 = a * x2 + c;
    const y1 = b * y2 + c;
    return [x1, y1];
  }
  