import express, { Request, Response } from 'express';
import { PrismaClient, Prisma } from '@prisma/client';
import bcrypt from 'bcrypt';  // Importa bcrypt

const app = express();
const PORT = process.env.PORT || 3000;
const prisma = new PrismaClient().$extends({
  model: {
    user: {
      async $beforeCreate({ args }: { args: Prisma.UserCreateArgs }) {
        if (args.data.password) {
          args.data.password = await bcrypt.hash(args.data.password, 10);
        }
        return args;
      },
      async $beforeUpdate({ args }: { args: Prisma.UserUpdateArgs }) {
        if (typeof args.data.password === 'string') {
          args.data.password = await bcrypt.hash(args.data.password, 10);
        }
        return args;
      },
      async verifyPassword(plainPassword: string, hashedPassword: string): Promise<boolean> {
        return await bcrypt.compare(plainPassword, hashedPassword);
      },
    },
  },
});

// Middleware básico
app.use(express.json());

// Ruta de ejemplo
app.get('/', (req: Request, res: Response) => {
  res.json({ message: '¡Hola desde Express con TypeScript!' });
});

/*
// Ruta POST de ejemplo
app.post('/api/users', (req: Request, res: Response) => {
  const { name } = req.body;
  res.json({ message: `Usuario creado: ${name}` });
});
*/

app.post('/api/users', async (req: Request, res: Response) => {
  const { name, nick, password } = req.body;  // Password en plano aquí
  try {
    const user = await prisma.user.create({
      data: { name, nick, password },  // ¡Se hashea en $beforeCreate!
    });
    // No devuelvas password en respuesta
    const { password: _, ...safeUser } = user;
    res.status(201).json(safeUser);
  } catch (error) {
    res.status(500).json({ error: 'Error creating user' });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});