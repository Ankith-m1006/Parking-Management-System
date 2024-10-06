import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import ankith from "../../assets/ankith.jpg"


export default function About() {
    const message = `

“At My Park Space, our mission is to transform the parking experience by making it easier and more efficient to find and reserve spots. Our team is composed of dedicated professionals with a wide range of expertise in information science and technology. We are committed to delivering a smooth and hassle-free experience for every user, ensuring that parking is convenient and stress-free.”`;

    return (
        <section className="bg-gray-800 min-h-screen py-20">
            <div className="container mx-auto px-4">
                <div className="text-center mb-10 max-w-3xl mx-auto">
                    <p className="whitespace-pre-line text-gray-300">{message}</p>
                </div>
                <div className="flex flex-wrap justify-center">
                    {[
                        { name: "Ankith M", img:ankith,role:"22BSM006" }/* description: "your about", role: "22BSM006"*/
                        
                    ].map((member, index) => (
                        <div key={index} className="w-full sm:w-6/12 md:w-4/12 lg:w-3/12 p-4">
                            <div className="bg-gray-900 text-center p-6 rounded-lg shadow-lg transition duration-250 ease-in-out hover:bg-gray-700 hover:text-white">
                                <img src={member.img} className="w-36 h-36 mx-auto mb-4 rounded-full object-cover border-4 border-gray-700" alt={member.name} />
                                <h3 className="text-lg font-bold uppercase mb-1 text-white transition duration-250 ease-in-out hover:text-gray-300">{member.name}</h3>
                                <div className="block mb-2">
                                    <p className="italic text-gray-400">{member.role}</p>
                                    <div className="inline-block w-12 h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
                                </div>
                                {/* <p className="text-gray-300">{member.description}</p>
                                <ul className="flex justify-center mt-6 space-x-2">
                                    <li><a href="#" className="bg-blue-500 text-white p-2 rounded-full"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="#" className="bg-red-600 text-white p-2 rounded-full"><i className="fab fa-pinterest"></i></a></li>
                                    
                                    
                                </ul> */}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
