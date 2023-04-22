Sub readFiles()
    Dim fileName As String
    Dim filePath As String
    Dim wb As Workbook
    Dim ws As Worksheet
    Dim fso As Object ' ファイルシステムオブジェクト
    Dim txtFile As Object ' テキストファイルオブジェクト
    Dim txtLine As String ' テキストファイルから読み込んだ1行のデータ
    
    Set ws = ActiveSheet ' 読み込むシートを指定
    Set fso = CreateObject("Scripting.FileSystemObject") ' ファイルシステムオブジェクトを作成
    For Each cell In ws.Range("A1:A10") ' ファイル名が入っているセル範囲を指定
        fileName = cell.Value ' セルの値をファイル名に設定
        filePath = ThisWorkbook.Path & "\" & fileName ' ファイルパスを作成
        If fso.FileExists(filePath) Then ' ファイルが存在する場合
            Set txtFile = fso.OpenTextFile(filePath, 1, False, -2) ' テキストファイルを開く
            Do While Not txtFile.AtEndOfStream ' ファイルの最後まで読み込む
                txtLine = txtFile.ReadLine ' 1行読み込む
                ' 1行ずつ表示する（例えば、以下のようにする）
                MsgBox txtLine
            Loop
            txtFile.Close ' ファイルを閉じる
        Else ' ファイルが存在しない場合
            MsgBox filePath & "が見つかりません。"
        End If
    Next cell
End Sub
