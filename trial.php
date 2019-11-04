<html>

<?php
$nameErr = $phoneErr = $genderErr ="";
$name = $phone =  $gender = $colour = "";
if ($_SERVER["REQUEST_METHOD"] == "POST")
{
        if (empty($_POST["name"])){
          $nameErr = "What are you called as?";}
        else {
            $name =  $_POST["name"];}
        if (empty($_POST["phone"])){
          $phoneErr = "How should I call you?";}
        else {
            $phone =  $_POST["phone"];}
        if (empty($_POST["gender"])){
          $genderErr = "Doesn't matter, but still required";}
         else {
            $gender =  $_POST["gender"];}
          $colour=$_POST["colour"];
}
?>

<?php include 'trial_insert.php'?>
<body>
  <h2>Let me know You</h2>
  <form method="post" action="">
    Name: <input type="text" name="name">
    <span class="error">* <?php echo $nameErr;?></span>
    <br><br>
    Phone Number: <input type="tel" name="phone">
    <span class="error">* <?php echo $phoneErr;?></span>
    <br><br>
    Favourite Colour: <input type="text" name="colour">
    <br><br>

    Gender:<span class="error">* <?php echo $genderErr;?></span>
    <div name="gender">
    <input type="radio" value="female">Lady
    <input type="radio"  value="male">Gentleman
    <input type="radio"  value="other">Neither of these
  </div>

    <br><br>
    <input type="submit" name="submit" value="Submit">
  </form>

</body>
</html>
