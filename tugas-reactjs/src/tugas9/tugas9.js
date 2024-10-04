import React from "react";
import { Table } from "flowbite-react";

function Tugas9() {
  return (
    <div className=" flex flex-col w-[80%] mx-auto mt-[3%] mb-[3%] rounded-[10px] shadow-[1px_2px_3px_2px_rgba(0,0,0,0.15)] overflow-hidden">
      <Table className="table-auto w-full">
        <Table.Head className="bg-[#A149FA] text-white">
          <Table.HeadCell className="px-4 py-4">NO</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4">NAMA</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4">MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4">NILAI</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4">INDEX NILAI</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4">ACTION</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              1
            </Table.Cell>
            <Table.Cell>John</Table.Cell>
            <Table.Cell>Algoritma</Table.Cell>
            <Table.Cell>80</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
                <button className="bg-white border border-gray-300 text-black py-1 px-2 rounded-[5px] mr-[15px]">Edit</button>
                <button className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              2
            </Table.Cell>
            <Table.Cell>Doe</Table.Cell>
            <Table.Cell>Matematika</Table.Cell>
            <Table.Cell>70</Table.Cell>
            <Table.Cell>B</Table.Cell>
            <Table.Cell>
                <button className="bg-white border border-gray-300 text-black py-1 px-2 rounded-[5px] mr-[15px]">Edit</button>
                <button className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                3
            </Table.Cell>
            <Table.Cell>Frank</Table.Cell>
            <Table.Cell>Kalkulus</Table.Cell>
            <Table.Cell>60</Table.Cell>
            <Table.Cell>C</Table.Cell>
            <Table.Cell>
                <button className="bg-white border border-gray-300 text-black py-1 px-2 rounded-[5px] mr-[15px]">Edit</button>
                <button className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-white">
                4
            </Table.Cell>
            <Table.Cell>Jason</Table.Cell>
            <Table.Cell>Basic Data</Table.Cell>
            <Table.Cell>90</Table.Cell>
            <Table.Cell>A</Table.Cell>
            <Table.Cell>
                <button className="bg-white border border-gray-300 text-black py-1 px-2 rounded-[5px] mr-[15px]">Edit</button>
                <button className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
}

export default Tugas9;

