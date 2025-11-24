// api/auth/login.js
// Password validation endpoint for founder access

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { password } = req.body;

  // Retrieve founder password from environment variable
  const founderPassword = process.env.FOUNDER_PASSWORD;

  if (!founderPassword) {
    return res.status(500).json({ message: 'Server configuration error' });
  }

  // Simple password check
  if (password === founderPassword) {
    // Create a simple session token (in production, use JWT)
    const token = Buffer.from(`founder_${Date.now()}`).toString('base64');

    return res.status(200).json({
      message: 'Authentication successful',
      token: token,
    });
  }

  return res.status(401).json({ message: 'Invalid password' });
}
