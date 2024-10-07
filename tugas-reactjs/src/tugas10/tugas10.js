import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import axios from "axios";

function Tugas10() {

    const [data, setData] = useState([]);
    const [nilai, setNilai] = useState([]);

    useEffect(() => {
        axios.get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
        .then((res) => {
            setData(res.data);
            const storeScore = res.data.map((item) => item.score);
            setNilai(storeScore);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])


    const handleIndexScore = (nilai) => {
        if(nilai >= 80) {
            return "A";
        } else if(nilai >= 70 && nilai < 80) {
            return "B";
        } else if(nilai >= 60 && nilai < 70) {
            return "C";
        } else if(nilai >= 50 && nilai < 60) {
            return "D";
        } else {
            return "E";
        }
    }


  return (
<div className="flex flex-col w-[80%] mx-auto mt-[3%] mb-[3%] rounded-[10px] shadow-[1px_2px_3px_2px_rgba(0,0,0,0.15)] overflow-hidden">
      <Table className="table-auto w-full">
        <Table.Head className="bg-[#A149FA] text-white">
          <Table.HeadCell className="px-4 py-4 text-left align-middle">NO</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">NAMA</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">NILAI</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">INDEX NILAI</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {data.map((item, index) => (
                <Table.Row key={item.id} className="bg-white dark:border-gray-700 dark:bg-gray-800]">
                <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-left px-4 py-4">
                    {index + 1}
                </Table.Cell>
                <Table.Cell className="text-left px-4 py-4">{item.name}</Table.Cell>
                <Table.Cell className="text-left px-4 py-4">{item.course}</Table.Cell>
                <Table.Cell className="text-left px-4 py-4">{item.score}</Table.Cell>
                <Table.Cell className="text-left px-4 py-4">{handleIndexScore(item.score)}</Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  );
}

export default Tugas10;

