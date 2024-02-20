import React from "react";
import BookPageLayout from "../Layouts/BookPageLayout";
import PosterImage from "../../../images/poster-2.jpg"
import PrimaryButton from "../../Components/Shared/PrimaryButton";
import Swal from 'sweetalert2'
import withReactContent from "sweetalert2-react-content";
import axios from "axios";

export default function BookDetailPage({user, book}) {
    // handles borrow book
    const handleBorrowBook = () => {
        // gets baseurl
        const baseUrl = import.meta.env.VITE_BASE_URL;

        // init swal
        const MySwal = withReactContent(Swal);

        // shows loading
        MySwal.fire({
            didOpen: () => {
                MySwal.showLoading();
            }  
        })

        // request
        axios.get(`${baseUrl}/api/book/borrow-book/${book.BukuId}`).then(response => {
            // handles
            if(response.data.status) {
                MySwal.fire({
                    icon:'success',
                    title: "Berhasil",
                    html: response.data.text
                }).then(() => {
                })
            }
            else {
                MySwal.fire({
                    icon: 'error',
                    title: 'Gagal',
                    html: response.data.text
                })
            }
        }).catch(ex => {
            MySwal.fire({
                icon:'error',
                title: 'Gagal',
                text: ex
            })
        })
    }

    // returns
    return (
        <BookPageLayout user={user}>
            <div>
                <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 mt-5">
                    <div className="basis-[50px] grow flex justify-center">
                        <img src={book.cover} className=""/>
                    </div>
                    <div className="basis-[200px] grow-[3]">
                        <h4 className="text-[#818181] text-lg font-light">{book.Penulis }</h4>
                        <h3 className="text-2xl text-black font-light">{book.Judul}</h3>
                        <h5 className="mt-4 text-lg">Deskripsi</h5>
                        <p className="mt-3 font-light">{book.Sinopsis}</p>
                        <div className="mt-3">
                            <h5 className="mt-4 text-lg">Detail Buku</h5>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                                {/* <div>
                                    <h6 className="text-[#464646]">Jumlah Halaman</h6>
                                    <p className="text-[#6A6A6A]">1854</p>
                                </div> */}
                                <div>
                                    <h6 className="text-[#464646]">Tahun Terbit</h6>
                                    <p className="text-[#6A6A6A]">{book.TahunTerbit}</p>
                                </div>
                                {/* <div>
                                    <h6 className="text-[#464646]">Bahasa</h6>
                                    <p className="text-[#6A6A6A]">Inggris</p>
                                </div> */}
                                <div>
                                    <h6 className="text-[#464646]">Penerbit</h6>
                                    <p className="text-[#6A6A6A]">{book.Penerbit}</p>
                                </div>
                                {/* <div>
                                    <h6 className="text-[#464646]">Kategori</h6>
                                    <p className="text-[#6A6A6A]">Fiksi</p>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center mt-5">
                    <PrimaryButton onClick={handleBorrowBook} text="Pinjam Buku"/>
                </div>
            </div>
        </BookPageLayout>
    );
}