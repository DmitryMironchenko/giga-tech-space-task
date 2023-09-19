import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Letter {
  letter: string;
  letter_index: number;
}

const INTERVAL = 2000; // 2 seconds
const MISSING_LETTER = '🫖';

// TODO: move it to .env file
const API_PATH = 'http://rekrutacjaweb.gigatechspace.net/letters/';

export const useLetterSpecialQuery = (indices: number[]) => {
  const queryResult = useQuery<Letter[], Error, string, [string, number[]]>({
    queryKey: ['letters', indices],
    queryFn: () =>
      Promise.all<Letter>(
        indices.map((index) =>
          axios(`${API_PATH}${index}`).then(
            (res) => res.data,
            (err) => {
              if (err.response.status === 418) {
                return { letter: MISSING_LETTER };
              }
            },
          ),
        ),
      ),
    select: (data) => data.map((datum) => datum.letter).join(''),
    refetchInterval: INTERVAL,
  });
  return queryResult;
};
