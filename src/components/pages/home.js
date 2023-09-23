import Sidebar from '../layouts/sidebar';

function Home(){
    return(
        <div class="row">
                <div class="col-lg-3 col-md-5">
                  <Sidebar/>
                </div>
                <div class="col-lg-9 col-md-7">
                    <h1>Home Page</h1>
                </div>
            </div>
    )
}
export default Home;