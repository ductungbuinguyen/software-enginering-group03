import React from 'react'
import '../../Style/Footer.css'
const Footer = () => {
  return (
    <footer class="main-footer">
            <div class="container">
                <div class="row">
                    <div class="col-md-3">
                        <h5 class="footer-heading">Menu Links</h5>
                        <ul class="list-unstyled nav-links">
                            <li><i class="fa fa-angle-right"></i> <a href="#" class="footer-link">Home</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#" class="footer-link">FAQ</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#" class="footer-link">Contacts</a></li>
                        </ul>
                    </div>
                    <div class="col-md-3">
                        <h5 class="footer-heading">Order Wizard</h5>
                        <ul class="list-unstyled nav-links">
                            <li><i class="fa fa-angle-right"></i> <a href="#" class="footer-link">Pay online</a></li>
                            <li><i class="fa fa-angle-right"></i> <a href="#" class="footer-link">Pay with cash on delivery</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <h5 class="footer-heading">Contacts</h5>
                        <ul class="list-unstyled contact-links">
                            <li><i class="fa-solid fa-location-dot"></i><a href="#" class="footer-link" target="_blank">Address: Tòa nhà H6, ĐH Bách Khoa </a>
                            </li>
                            <li><i class="fa-solid fa-envelope"></i><a href="#" class="footer-link">Mail: food@bk.com</a></li>
                            <li><i class="fa-solid fa-phone"></i><a href="#" class="footer-link">Phone: +3630123456789</a></li>
                        </ul>
                    </div>
                    <div class="col-md-2">
                        <h5 class="footer-heading">Find Us On</h5>
                        <ul class="list-unstyled social-links">
                            <li><a href="https://facebook.com" class="social-link" target="_blank"><i class="fa-brands fa-facebook"></i></a></li>
                            <li><a href="https://twitter.com" class="social-link" target="_blank"><i class="fa-brands fa-twitter"></i></a></li>
                            <li><a href="https://instagram.com" class="social-link" target="_blank"><i class="fa-brands fa-instagram"></i></a></li>
                            <li><a href="https://pinterest.com" class="social-link" target="_blank"><i class="fa-brands fa-pinterest-p"></i></a></li>
                        </ul>
                    </div>
                </div>
                <hr id="dotdot"></hr>
                <div class="row">
                    <div class="col-md-8">
                        <ul id="subFooterLinks">
                            <li><a href="https://themeforest.net/user/ultimatewebsolutions" target="_blank">With <i class="fa fa-heart pulse"></i> by our Team</a></li>
                            <li><a href="../pdf/terms.pdf" target="_blank">Terms and conditions</a></li>
                        </ul>
                    </div>
                    <div class="col-md-4">
                        <div id="copy">© 2022 BKFood</div>
                    </div>
                </div>
            </div>
        </footer>
  )
}

export default Footer