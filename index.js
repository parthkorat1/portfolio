import cors from 'cors';
app.use(cors({
  origin: 'http://localhost:5173' // or '*' to allow all origins
}));
