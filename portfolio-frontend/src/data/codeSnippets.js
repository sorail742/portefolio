// Extraits affichés dans l'éditeur de la section Compétences
export const codeSnippets = [
    {
        file: "server.js",
        lang: "JavaScript",
        color: "#F7DF1E",
        code: `import express from 'express';
import { Server } from 'socket.io';

const app = express();
app.use(express.json());

app.get('/api/appointments', auth, async (req, res) => {
  const list = await db.appointments.findByUser(req.user.id);
  res.json(list);
});

// Real-time messaging
io.on('connection', (socket) => {
  socket.on('message', (msg) => io.to(msg.room).emit('message', msg));
});`,
    },
    {
        file: "Dashboard.jsx",
        lang: "React",
        color: "#61DAFB",
        code: `export default function Dashboard() {
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetch('/api/stats')
      .then((res) => res.json())
      .then(setStats);
  }, []);

  return (
    <Grid>
      <StatCard label="Patients" value={stats?.patients} />
      <StatCard label="Appointments" value={stats?.appointments} />
    </Grid>
  );
}`,
    },
    {
        file: "home_page.dart",
        lang: "Flutter",
        color: "#54C5F8",
        code: `class HomePage extends StatelessWidget {
  const HomePage({super.key});

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Cultivateur Market')),
      body: ListView.builder(
        itemCount: products.length,
        itemBuilder: (context, i) => ProductCard(products[i]),
      ),
    );
  }
}`,
    },
    {
        file: "schema.sql",
        lang: "PostgreSQL",
        color: "#4169E1",
        code: `-- Appointments between patients and doctors
CREATE TABLE appointments (
  id           SERIAL PRIMARY KEY,
  patient_id   INT REFERENCES patients(id),
  doctor_id    INT REFERENCES doctors(id),
  scheduled_at TIMESTAMP NOT NULL,
  status       VARCHAR(20) DEFAULT 'pending'
);

CREATE INDEX idx_appointments_doctor
  ON appointments (doctor_id, scheduled_at);`,
    },
];
