import React from 'react'
import './service.css'
import {MainLayout} from '../../index';
const Service = () => {
  return (
    <MainLayout>

    <div className='service-wrapper'>
      <h1>Our Service</h1>
      <div className='service-lists'>
        <div className='service-list'>
            <div>
                <h2>Book Cataloging and Management</h2>
                <p>Effortlessly catalog and manage your library’s collection with our comprehensive book management features. Add, edit, or remove books with ease. Our system allows you to categorize books by genre, author, publication date, and more, ensuring that your collection is well-organized and easy to navigate.</p>
            </div>
            <div><img src="" alt="" /></div>
        </div>
        <div className='service-list'>
            <div><img src="" alt="" /></div>
            <div>
                <h2>User Management and Authentication</h2>
                <p>Our platform offers robust user management capabilities, including user registration, login, and authentication. We provide different user roles, such as administrators, librarians, and members, each with distinct permissions to ensure a secure and controlled environment.</p>
            </div>
        </div>
        <div className='service-list'>
            <div>
                <h2></h2>
                <p></p>
            </div>
            <div><img src="" alt="" /></div>
        </div>
        <div className='service-list'>
            <div><img src="" alt="" /></div>
            <div>
                <h2>Borrowing and Returning Books</h2>
                <p>Our system streamlines the borrowing and returning process, making it straightforward for both librarians and users. Set borrowing limits based on user categories, such as SC, ST, OBC, and General, to ensure fair access to resources.</p>
            </div>
        </div>
        <div className='service-list'>
            <div>
                <h2>Fine Management</h2>
                <p>Automate the management of overdue fines with our built-in fine management system. Our platform calculates fines based on library rules and policies and notifies users about their outstanding dues, ensuring transparency and accountability.</p>
            </div>
            <div><img src="" alt="" /></div>
        </div>
        <div className='service-list'>
            <div><img src="" alt="" /></div>
            <div>
                <h2>Advanced Search and Filtering</h2>
                <p>Find the books you need quickly with our advanced search and filtering options. Users can search for books by title, author, ISBN, genre, and more. Our intuitive search functionality helps users discover new books and manage their reading lists.</p>
            </div>
        </div>
        <div className='service-list'>
            <div>
                <h2>Detailed Reports and Analytics</h2>
                <p>Gain insights into your library’s operations with our detailed reporting and analytics features. Track book availability, user activity, borrowing trends, and more. Our reports help you make informed decisions to enhance your library’s services.</p>
            </div>
            <div><img src="" alt="" /></div>
        </div>
        <div className='service-list'>
            <div><img src="" alt="" /></div>
            <div>
                <h2>Secure and Scalable</h2>
                <p>Our library management system is built with security and scalability in mind. We use the latest technologies to protect your data and ensure that our platform can grow with your library’s needs.</p>
            </div>
        </div>
      </div>
    </div>
    </MainLayout>
  )
}

export default Service
