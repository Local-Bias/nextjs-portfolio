// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { number: number; unit: string }[];

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch('https://ribbit-next-app.vercel.app/api/kintone/summary');

  const data = await response.json();

  const result = [
    { number: data?.numUsers || 0, unit: 'companies' },
    { number: data?.counter || 0, unit: 'actions' },
  ];

  res.status(200).json(result);
};
