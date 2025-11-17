import * as crypto from 'crypto';
import { config } from 'dotenv';
config();  // Carga .env

const algorithm = 'aes-256-gcm';
const secretKey = Buffer.from(process.env.ENCRYPTION_KEY || '', 'base64');  // Base64 para clave

export function encrypt(text: string): string {
  if (!secretKey || secretKey.length !== 32) {
    throw new Error('Clave de encriptación inválida');
  }

  const iv = crypto.randomBytes(16);
  const cipher = crypto.createCipheriv(algorithm, secretKey,iv);
  cipher.setAAD(iv);

  let encrypted = cipher.update(text, 'utf8', 'hex');
  encrypted += cipher.final('hex');

  const authTag = cipher.getAuthTag();

  return Buffer.concat([iv, authTag, Buffer.from(encrypted, 'hex')]).toString('base64');
}

export function decrypt(encryptedText: string): string {
  if (!secretKey || secretKey.length !== 32) {
    throw new Error('Clave de encriptación inválida');
  }

  const combined = Buffer.from(encryptedText, 'base64');
  if (combined.length < 32) {
    throw new Error('Datos encriptados inválidos');
  }

  const iv = combined.slice(0, 16);
  const authTag = combined.slice(16, 32);
  const encrypted = combined.slice(32);

  const decipher = crypto.createDecipheriv(algorithm, secretKey,iv);
  decipher.setAAD(iv);
  decipher.setAuthTag(authTag);

  let decrypted = decipher.update(encrypted,undefined, 'utf8');
  decrypted += decipher.final('utf8');

  return decrypted;
}