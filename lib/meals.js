import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  // for testing; extra delay
  await new Promise((resolve) => setTimeout(resolve, 5000));

  // if (true) {
  //   throw new Error("Loading meals failed");
  // }

  return db.prepare(`SELECT * FROM meals`).all();
  // run: insert data
  // all: fetch data
  // get: single row
}
