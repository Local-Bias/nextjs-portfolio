import type { NextApiRequest, NextApiResponse } from 'next';

type Data = { number: number; unit: string }[];

const END_POINT =
  'https://script.google.com/macros/s/AKfycbwtMnUUf9oma_5PPYM1JYQrUWjyt8XcKODvtiHghNucI370piyynTSqmN91kx-bN08/exec';

export default async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const response = await fetch(END_POINT);

  const data = await response.json();

  const result = [
    { number: data?.numUsers || 0, unit: 'companies' },
    { number: data?.counter || 0, unit: 'actions' },
  ];

  res.status(200).json(result);
};
