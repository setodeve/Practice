<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Generate Users</title>
    <link rel="stylesheet" href="generate.css">
  </head>
<body>
    <form action="index.php" method="post">
        <label for="count">Number of Employee:</label>
        <input type="number" name="count" min="1" max="100" value="5">

        <label for="count">Number of Restaurantlocation:</label>
        <input type="number" name="locationCount" min="1" max="100" value="5">

        <label for="count">Min of Salary:</label>
        <input type="number" name="minSalary" min="10" max="10000" placeholder="100" value="100">
        
        <label for="count">Max of Salary:</label>
        <input type="number" name="maxSalary" min="10" max="10000" placeholder="1000" value="1000">

        <Label>Min of ZIPCODE</Label>
        <input type="text" pattern="[0-9]{5}" title="Five digit zip code" placeholder="12345" value="12345" name="minZipcode" id="minZipcode"/>
        <Label>Max of ZIPCODE</Label>
        <input type="text" pattern="[0-9]{5}" title="Five digit zip code" placeholder="12346" value="12346" name="maxZipcode" id="maxZipcode"/>

        <label for="format">Download Format:</label>
        <select id="format" name="format">
            <option value="html">HTML</option>
            <option value="markdown">Markdown</option>
            <option value="json">JSON</option>
            <option value="txt">Text</option>
        </select>

        <button type="submit">Generate</button>
    </form>
</body>
</html>