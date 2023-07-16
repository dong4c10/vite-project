import React from "react";
import "./style.css"

export default function () {
  return (
    <div>
      {/* SIDEBAR */}
      <section id="sidebar">
        <a href="#" className="brand">
          <i className="bx bxs-smile" />
          <span className="text">Admin</span>
        </a>
        <ul className="side-menu top">
          <li className="active">
            <a href="#">
              <i className="bx bxs-dashboard" />
              <span className="text">Dashboard</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-shopping-bag-alt" />
              <span className="text">Cửa hàng của tôi</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-doughnut-chart" />
              <span className="text">Analytics</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-message-dots" />
              <span className="text">Tin nhắn</span>
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bx bxs-group" />
              <span className="text">Nhóm</span>
            </a>
          </li>
        </ul>
        <ul className="side-menu">
          <li>
            <a href="#">
              <i className="bx bxs-cog" />
              <span className="text">Cài đặt</span>
            </a>
          </li>
          <li>
            <a href="#" className="logout">
              <i className="bx bxs-log-out-circle" />
              <span className="text">Logout</span>
            </a>
          </li>
        </ul>
      </section>
      {/* SIDEBAR */}
      {/* CONTENT */}
      <section id="content">
        {/* NAVBAR */}
        <nav>
          <i className="bx bx-menu" />
          <a href="#" className="nav-link">
            Thể loại
          </a>
          <form action="#">
            <div className="form-input">
              <input type="search" placeholder="Search..." />
              <button type="submit" className="search-btn">
                <i className="bx bx-search" />
              </button>
            </div>
          </form>
          <input type="checkbox" id="switch-mode" hidden />
          <label htmlFor="switch-mode" className="switch-mode" />
          <a href="#" className="notification">
            <i className="bx bxs-bell" />
            <span className="num">8</span>
          </a>
          <a href="#" className="profile">
            <img src="OIP.jpg" />
          </a>
        </nav>
        {/* NAVBAR */}
        {/* MAIN */}
        <main>
          <div className="head-title">
            <div className="left">
              <h1>Dashboard</h1>
              <ul className="breadcrumb">
                <li>
                  <a href="#">Dashboard</a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                </li>
                <li>
                  <a className="active" href="#">
                    Trang chủ
                  </a>
                </li>
              </ul>
            </div>
            <a href="#" className="btn-download">
              <i className="bx bxs-cloud-download" />
              <span className="text">Download PDF</span>
            </a>
          </div>
          <ul className="box-info">
            <li>
              <i className="bx bxs-calendar-check" />
              <span className="text">
                <h3>1020</h3>
                <p>Đơn hàng mới</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-group" />
              <span className="text">
                <h3>2834</h3>
                <p>Khách</p>
              </span>
            </li>
            <li>
              <i className="bx bxs-dollar-circle" />
              <span className="text">
                <h3>$2543</h3>
                <p>Tổng doanh thu</p>
              </span>
            </li>
          </ul>
          <div className="table-data">
            <div className="order">
              <div className="head">
                <h3>những đơn đặt hàng gần đây</h3>
                <i className="bx bx-search" />
                <i className="bx bx-filter" />
              </div>
              <table>
                <thead>
                  <tr>
                    <th>Người dùng</th>
                    <th>Ngày đặt hàng</th>
                    <th>Trạng thái</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img src="OIP.jpg" />
                      <p>Đông</p>
                    </td>
                    <td>01-10-2023</td>
                    <td>
                      <span className="status completed">Hoàn thành</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="OIP.jpg" />
                      <p>Đông</p>
                    </td>
                    <td>01-10-2023</td>
                    <td>
                      <span className="status pending">Chưa giải quyết</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="OIP.jpg" />
                      <p>Đông</p>
                    </td>
                    <td>03-03-2023</td>
                    <td>
                      <span className="status process">Quá trình</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="OIP.jpg" />
                      <p>Đông</p>
                    </td>
                    <td>03-03-2023</td>
                    <td>
                      <span className="status pending">Chưa giải quyết</span>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img src="OIP.jpg" />
                      <p>Đông</p>
                    </td>
                    <td>03-03-2023</td>
                    <td>
                      <span className="status completed">Hoàn thành</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="todo">
              <div className="head">
                <h3>Todos</h3>
                <i className="bx bx-plus" />
                <i className="bx bx-filter" />
              </div>
              <ul className="todo-list">
                <li className="completed">
                  <p>Những việc cần làm</p>
                  <i className="bx bx-dots-vertical-rounded" />
                </li>
                <li className="completed">
                  <p>Những việc cần làm</p>
                  <i className="bx bx-dots-vertical-rounded" />
                </li>
                <li className="not-completed">
                  <p>Những việc cần làm</p>
                  <i className="bx bx-dots-vertical-rounded" />
                </li>
                <li className="completed">
                  <p>Những việc cần làm</p>
                  <i className="bx bx-dots-vertical-rounded" />
                </li>
                <li className="not-completed">
                  <p>Những việc cần làm</p>
                  <i className="bx bx-dots-vertical-rounded" />
                </li>
              </ul>
            </div>
          </div>
        </main>
        {/* MAIN */}
      </section>
      {/* CONTENT */}
    </div>
  );
}
