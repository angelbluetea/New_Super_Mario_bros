#pragma strict

function Start () {

}

function Update () { // 一定時間ごとに行われる処理
transform.position.x +=
Input.GetAxis("Horizontal") * (1000.0 * Time.deltaTime);
}