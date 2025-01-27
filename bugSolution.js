const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  const userId = req.params.id;
  try {
    // ... asynchronous operation to fetch user data ...
    const user = await getUser(userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json({ id: user.id, name: user.name });
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ error: 'Failed to fetch user' });
  }
});

const getUser = async (id) => {
  //Simulate fetching data from the database
  return new Promise((resolve) => {
    setTimeout(() => {
      if (id === '1') {
        resolve({ id: '1', name: 'John Doe' });
      } else {
        resolve(null);
      }
    }, 500);
  });
}

app.listen(3000, () => console.log('Server listening on port 3000'));