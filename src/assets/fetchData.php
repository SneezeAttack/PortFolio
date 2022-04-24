<?php

$arr = '{"id":"1","name":"Better Than Me","artist":"Kenton Bryant","genre":"Country","work":"Mixing"},{"id":"2","name":"Gone With The Wind","artist":"Architects","genre":"Metal","work":"Mixing"},{"id":"3","name":"Model Decoy","artist":"Hearts in Atlantis","genre":"Rock","work":"Mixing"},{"id":"4","name":"That\'ll Get Ya There","artist":"Kenton Bryant","genre":"Country","work":"Mixing"},{"id":"5","name":"Blue","artist":"Alchemy","genre":"Alternative","work":"Mixing"},{"id":"6","name":"She Is A Lady","artist":"MVP","genre":"Electronic","work":"Mixing"}]';

echo $arr;

?>


<!--?php

$data = "[ ";

$con = mysqli_connect("localhost","id17353316_nightraven1989","\?}H2UXJNH*+-kBV", "id17353316_pfmusicprod");

// Check connection

if(!$con) die("Connection failed.");
if (mysqli_connect_errno()) {
  echo "Failed to connect to MySQL: " . mysqli_connect_error();
  exit();
}

$query = "SELECT name, artist, genre, job_type FROM song, jobs WHERE jobs=jobs.id;";

//$query = "SELECT * FROM song";
if($result = mysqli_query($con, $query)){
    
    while($row = mysqli_fetch_assoc($result)){
        
        $data = $data . "{ " .
        $row[name] .
        $row[artist]  .
        $row[genre] .
        $row[job_type] . "}";
        

        
    }
    
    mysqli_free_result($result);
    
}else{die("Query failed");}

$data = $data . " ]";
//print_r ($data);

echo $data;
mysqli_close($con);
