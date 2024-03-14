import { Slide01Screem, Slide02Screem } from './src/screens/index'
import { Dispatch, SetStateAction, useState } from 'react'
export interface IPagina {
  setPageI: Dispatch<SetStateAction<number>>
}

export default function App() {
  const [page, setPage] = useState(1)
  if (page == 1) {
    return (
      <Slide01Screem setPageI={setPage} />
    );
  } else if (page == 2) {
    return (
      <Slide02Screem setPageI={setPage} />
    );

  }


}