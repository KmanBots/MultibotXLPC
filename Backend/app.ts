import {Player} from "./models/player";

const players = {}

const state = {}

const playersMetadata = {
    dead: 0,
    inZone: 0,
    outZone: 0,
    averageRun: 0,
    averageHealth: 0,
    averageFood: 0,
    averageEnergySip: 0
}

type Coordinate = {
    x: number;
    y: number
}

// function updatePlayerState(player : Player) {
//
// }

function updateBounds(bounds : { topLeft: Coordinate, bottomRight: Coordinate }) {
    state.bounds = bounds;

    // Calculate player movements


)

function onDisconnect(player : Player) {
    delete players[player.name];
}

function onConnection( player: Player ) {
    players[player.name] = player
}
