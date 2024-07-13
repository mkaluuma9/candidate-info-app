

const express = require('express');
const db = require('./models'); 
const candidatesRoutes = require('./routes/candidatesRoutes');

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.use('/api/candidates', candidatesRoutes);


db.sequelize.sync()
  .then(() => {
    console.log('Database synced successfully.');
  })
  .catch(err => {
    console.error('Error syncing database:', err);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;