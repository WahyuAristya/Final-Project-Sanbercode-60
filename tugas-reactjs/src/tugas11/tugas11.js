import React, { useEffect, useState } from "react";
import { Table } from "flowbite-react";
import axios from "axios";

function Tugas11() {

    const [data, setData] = useState([]);
    const [nilai, setNilai] = useState([]);
    const [input, setInput] = useState({
        name : "",
        course : "",
        score : 0
    });
    const [fetchStatus, setFetchStatus] = useState(true);
    const [errorMessage, setErrorMessage] = useState({
        name : "",
        course : "",
        score : ""
    });


    useEffect(() => {
        axios.get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
        .then((res) => {
            setData(res.data);
            const storeScore = res.data.map((item) => item.score);
            setNilai(storeScore);
        })
        .catch((error) => {
            console.log(error);
        })
    }, [])



    useEffect(() => {
        if(fetchStatus === true) {
            axios.get("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score")
            .then((res) => {
                setData(res.data);
            })
            .catch((error) => {
                console.log(error);
            })
            setFetchStatus( false );
        }
    }, [fetchStatus, setFetchStatus])


    const handleForm = (event) => {

        let name = event.target.name;
        let value = event.target.value;

        if(name === 'name'){
            setInput({
                ...input, name : value
            })
        } else if(name === 'course'){
            setInput({
                ...input, course : value
            })
        } else if(name === 'score'){
            setInput({
                ...input, score : value
            })
        }
    }


    const handleSubmit = (event) => {
        event.preventDefault();

        let {name, course, score} = input;

        setErrorMessage({ name: "", course: "", score: "" });
        let isValid = true;
        if(name.trim() === "") {
            setErrorMessage(prevState => ({
                ...prevState,
                name: "Nama tidak boleh kosong"
            }))
            isValid = false;
        } if(course.trim() === "") {
            setErrorMessage(prevState => ({
                ...prevState,
                course: "Course tidak boleh kosong"
            }))
            isValid = false;
        } if(score === "" || score < 0 || score > 100) {
            setErrorMessage(prevState => ({
                ...prevState,
                score: "Nilai harus antara 0 - 100"
            }))
            isValid = false;
        }

        if(isValid) {
            axios.post("https://6678f9f40bd45250562081d9.mockapi.io/api/student-score", { name, course, score })
        .then((res) => {
            setFetchStatus(true);

            //clear form
            setInput({
                name: "",
                course: "",
                score: 0
            });
        })
        }
    }


    const handleDelete = (id) => {
        axios.delete(`https://6678f9f40bd45250562081d9.mockapi.io/api/student-score/${id}`)
        .then(() => {
            setFetchStatus(true);
        })
        .catch((error) => {
            console.log(error);
        })
    }


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
    <>
    <div className="flex flex-col w-[80%] mx-auto mt-[3%] mb-[3%] rounded-[10px] shadow-[1px_1px_1px_1px_rgba(0,0,0,0.1)] overflow-hidden">
      <Table className="table-auto w-full">
        <Table.Head className="bg-[#A149FA] text-white">
          <Table.HeadCell className="px-4 py-4 text-left align-middle">NO</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">NAMA</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">MATA KULIAH</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">NILAI</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">INDEX NILAI</Table.HeadCell>
          <Table.HeadCell className="px-4 py-4 text-left align-middle">ACTION</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
            {data.map((item, index) => (
                <Table.Row key={item.id} className="bg-white">
                    <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white text-left px-4 py-4">
                        {index + 1}
                    </Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">{item.name}</Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">{item.course}</Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">{item.score}</Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">{handleIndexScore(item.score)}</Table.Cell>
                    <Table.Cell className="text-left px-4 py-4">
                        <button onClick={() => handleDelete(item.id)} className="bg-red-500 border border-gray-300 text-white py-1 px-2 rounded-[5px] p-[2px]">Delete</button>
                    </Table.Cell>
                </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>

    <div className="flex flex-col p-4 w-[80%] mx-auto mt-[3%] mb-[3%] rounded-[10px] shadow-[1px_1px_4px_1px_rgba(0,0,0,0.1)] overflow-hidden">
            <form onSubmit={handleSubmit}>
                <label className="block mb-8 mt-3">
                    <span className="text-black font-medium">Name :</span>
                    <input onChange={handleForm} value={input.name} type="text" name="name" className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    {errorMessage.name && <p className="text-red-500 text-sm mt-1">{errorMessage.name}</p>}
                </label>
                <label className="block mb-8">
                    <span className="text-black font-medium">Mata Kuliah :</span>
                    <input onChange={handleForm} value={input.course} type="text" name="course" className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    {errorMessage.course && <p className="text-red-500 text-sm mt-1">{errorMessage.course}</p>}
                </label>
                <label className="block mb-3">
                    <span className="text-black font-medium">Nilai :</span>
                    <input onChange={handleForm} value={input.score} type="number" name="score" className="mt-2 block w-full rounded-md bg-gray-100 border-gray-200 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50" />
                    {errorMessage.score && <p className="text-red-500 text-sm mt-1">{errorMessage.score}</p>}
                </label>
                <button className="bg-blue-600 border border-gray-300 text-white py-2 px-2 rounded-[5px] w-[7%] font-medium mt-5 mb-3 hover:bg-blue-800">Submit</button>
            </form>
    </div>
    </>
  );
}

export default Tugas11;

