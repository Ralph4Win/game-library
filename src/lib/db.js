import { MongoClient, ObjectId } from "mongodb";

const DB_URI = process.env.DB_URI;

const client = new MongoClient(DB_URI);

await client.connect();
const db = client.db("GameLibraryDB");

//////////////////////////////////////////
// Games
//////////////////////////////////////////

// Get all games
async function getGames() {
  let games = [];
  try {
    const collection = db.collection("games");
    const query = {};
    games = await collection.find(query).toArray();
    games.forEach((game) => {
      game._id = game._id.toString();
    });
    console.log("Loaded games:", games.length);
  } catch (error) {
    console.log("Error loading games:", error);
  }
  return games;
}

// Get game by id
async function getGame(id) {
  let game = null;
  try {
    const collection = db.collection("games");
    const query = { _id: new ObjectId(id) };
    game = await collection.findOne(query);

    if (!game) {
      console.log("No game with id " + id);
    } else {
      game._id = game._id.toString();
    }
  } catch (error) {
    console.log("Error loading game:", error.message);
  }
  return game;
}

// Create game
async function createGame(game) {
  if (!game.image) {
    game.image = "/images/placeholder.jpg";
  }
  if (typeof game.played === "undefined") {
    game.played = false;
  }
  try {
    const collection = db.collection("games");
    const result = await collection.insertOne(game);
    console.log("Game created with id:", result.insertedId.toString());
    return result.insertedId.toString();
  } catch (error) {
    console.log("Error creating game:", error.message);
  }
  return null;
}

// Update game
async function updateGame(game) {
  try {
    let id = game._id;
    delete game._id;
    const collection = db.collection("games");
    const query = { _id: new ObjectId(id) };
    const result = await collection.updateOne(query, { $set: game });

    if (result.matchedCount === 0) {
      console.log("No game with id " + id);
    } else {
      console.log("Game with id " + id + " has been updated.");
      return id;
    }
  } catch (error) {
    console.log("Error updating game:", error.message);
  }
  return null;
}

// Delete game by id
async function deleteGame(id) {
  try {
    const collection = db.collection("games");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No game with id " + id);
    } else {
      console.log("Game with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log("Error deleting game:", error.message);
  }
  return null;
}

//////////////////////////////////////////
// Platforms
//////////////////////////////////////////

// Get all platforms
async function getPlatforms() {
  let platforms = [];
  try {
    const collection = db.collection("platforms");
    const query = {};
    platforms = await collection.find(query).toArray();
    platforms.forEach((platform) => {
      platform._id = platform._id.toString();
    });
    console.log("Loaded platforms:", platforms.map(p => p.name).join(", "));
  } catch (error) {
    console.log("Error loading platforms:", error);
  }
  return platforms;
}

// Get platform by id
async function getPlatform(id) {
  let platform = null;
  try {
    const collection = db.collection("platforms");
    const query = { _id: new ObjectId(id) };
    platform = await collection.findOne(query);

    if (!platform) {
      console.log("No platform with id " + id);
    } else {
      platform._id = platform._id.toString();
    }
  } catch (error) {
    console.log("Error loading platform:", error.message);
  }
  return platform;
}

// Create platform
async function createPlatform(platform) {
  if (!platform.logo) {
    platform.logo = "/images/placeholder.jpg";
  }
  try {
    const collection = db.collection("platforms");
    const result = await collection.insertOne(platform);
    console.log("Platform created with id:", result.insertedId.toString());
    return result.insertedId.toString();
  } catch (error) {
    console.log("Error creating platform:", error.message);
  }
  return null;
}

// Delete platform by id
async function deletePlatform(id) {
  try {
    const collection = db.collection("platforms");
    const query = { _id: new ObjectId(id) };
    const result = await collection.deleteOne(query);

    if (result.deletedCount === 0) {
      console.log("No platform with id " + id);
    } else {
      console.log("Platform with id " + id + " has been successfully deleted.");
      return id;
    }
  } catch (error) {
    console.log("Error deleting platform:", error.message);
  }
  return null;
}

//////////////////////////////////////////
// Export
//////////////////////////////////////////

export default {
  // Games
  getGames,
  getGame,
  createGame,
  updateGame,
  deleteGame,

  // Platforms
  getPlatforms,
  getPlatform,
  createPlatform,
  deletePlatform
};
