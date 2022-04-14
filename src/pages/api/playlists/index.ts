import type { NextApiRequest, NextApiResponse } from 'next';
import { getToken } from 'next-auth/jwt';

import { spotifyApi } from 'services/api';

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { id, accessToken } = await getToken({
    req,
    secret: process.env.SECRET,
  });
  const params = req.query;

  try {
    const response = await spotifyApi.get(`/users/${id}/playlists`, {
      headers: { Authorization: `Bearer ${accessToken}` },
      params,
    });

    return res.status(200).json(response.data);
  } catch (error) {
    const { status, message } = error.response.data.error;

    return res.status(status).json({ message });
  }
};
