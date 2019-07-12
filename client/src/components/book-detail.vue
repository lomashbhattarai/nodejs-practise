<template>
    <div class="container">
        <div class="card" style="width: 18rem;">
            <img class="card-img-top" src="../../book.jpg" alt="Card image cap">
            <div class="card-body">
                <h5 class="card-title"></h5>
                <p class="card-text"></p>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Read
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a class="dropdown-item" href="#">Want to Read</a>
                        <a class="dropdown-item" href="#">Read</a>
                        <a class="dropdown-item" href="#">Reading</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        created(){
            
        },
        components:{
        }


    }

</script>