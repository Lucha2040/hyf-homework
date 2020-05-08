const express = require("express");
const app = express();

app.use("/", (req, res, next) => {
  const logTime = new Date().toLocaleString();
  console.log(`${logTime} request received for path: ${req.originalUrl}`);
  next();
});

const mealsRouter = require("./routes/meals");
app.get("/meals", mealsRouter);
app.get("/meals/:id", mealsRouter);

const randomMealRouter = require("./routes/meal");
app.get("/meal", randomMealRouter);

const cheapMealsRouter = require("./routes/cheap_meals");
app.get("/cheap_meals", cheapMealsRouter);

const largeMealsRouter = require("./routes/large_meals");
app.get("/large_meals", largeMealsRouter);

const reservationsRouter = require("./routes/reservations");
app.get("/reservations", reservationsRouter);
app.get("/reservations/:id", reservationsRouter);

const randomReservationRouter = require("./routes/reservation");
app.get("/reservation", randomReservationRouter);

const reviewsRouter = require("./routes/reviews");
app.get("/reviews", reviewsRouter);
app.get("/reviews/:id", reviewsRouter);

app.listen(4000);
