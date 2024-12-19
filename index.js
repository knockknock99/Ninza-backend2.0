const express = require('express');
const app = express();
const PORT =3000;
// Routes

app.get('/api/getTournament', (req, res) => {
    const tournamentData = {
      id: 1,
      name: 'Champions League Finals',
      game: 'Soccer',
      startDate: '2024-12-15',
      endDate: '2024-12-20',
      location: 'London, UK',
      teams: [
        { id: 101, name: 'Team A' },
        { id: 102, name: 'Team B' },
        { id: 103, name: 'Team C' },
        { id: 104, name: 'Team D' },
      ],
      prizePool: 1000000,
      description: 'The ultimate soccer showdown featuring the best teams from around the globe. Compete for glory and a million-dollar prize pool!',
    }; 
    res.json({ success: true, data: tournamentData });
  });

  app.get('/api/users',(req, res) => {
    const users={
        "id": 1,
        "first_name": "Marshall",
        "last_name": "Culy",
        "email": "mculy0@canalblog.com",
        "gender": "Male",
        "avatar": "http://dummyimage.com/128x100.png/dddddd/000000"
    };
    return res.json({ success: true, data: users });
  });

//   app.get('/api/users/byId/:id', async (req, res) => {
//     const { id } = Number(req.params.id); 
//     console.log('Requested User ID:', id);
//     const user = users.find(user=>user.id===id);
//     return res.json(user);
//   });

app.listen(PORT, ()=> console.log(`Server started at PORT:http//localhost:${PORT}`));
