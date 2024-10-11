import React from "react";
import { Table } from "flowbite-react";

function Tugas9() {
  return (
    <div className=" flex flex-col w-[80%] mx-auto mt-[3%] mb-[3%] rounded-[10px] shadow-[1px_2px_3px_2px_rgba(0,0,0,0.15)] overflow-hidden">
      <Table className="table-auto w-full">
        <Table.Head className="bg-[#A149FA] text-white">
          <Table.HeadCell className="px-4 py-4 bg-transparent">NO</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 bg-transparent">NAMA</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 bg-transparent">MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 bg-transparent">NILAI</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 bg-transparent">INDEX NILAI</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 bg-transparent">ACTION</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
          <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-left px-4 py-4">
              1
            </Table.Cell>
            <Table.Cell className="px-4 py-4">John</Table.Cell>
            <Table.Cell className="px-4 py-4">Algoritma</Table.Cell>
            <Table.Cell className="px-4 py-4">80</Table.Cell>
            <Table.Cell className="px-4 py-4">A</Table.Cell>
            <Table.Cell>
                <button className="bg-white border border-gray-300 text-black py-1 px-2 rounded-[5px] mr-[15px]">Edit</button>
                <button className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white px-4 py-4">
              2
            </Table.Cell>
            <Table.Cell className="px-4 py-4">Doe</Table.Cell>
            <Table.Cell className="px-4 py-4">Matematika</Table.Cell>
            <Table.Cell className="px-4 py-4">70</Table.Cell>
            <Table.Cell className="px-4 py-4">B</Table.Cell>
            <Table.Cell>
                <button className="bg-white border border-gray-300 text-black py-1 px-2 rounded-[5px] mr-[15px]">Edit</button>
                <button className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white px-4 py-4">
                3
            </Table.Cell>
            <Table.Cell className="px-4 py-4">Frank</Table.Cell>
            <Table.Cell className="px-4 py-4">Kalkulus</Table.Cell>
            <Table.Cell className="px-4 py-4">60</Table.Cell>
            <Table.Cell className="px-4 py-4">C</Table.Cell>
            <Table.Cell>
                <button className="bg-white border border-gray-300 text-black py-1 px-2 rounded-[5px] mr-[15px]">Edit</button>
                <button className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
            </Table.Cell>
          </Table.Row>
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-black dark:text-white px-4 py-4">
                4
            </Table.Cell>
            <Table.Cell className="px-4 py-4">Jason</Table.Cell>
            <Table.Cell className="px-4 py-4">Basic Data</Table.Cell>
            <Table.Cell className="px-4 py-4">90</Table.Cell>
            <Table.Cell className="px-4 py-4">A</Table.Cell>
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

