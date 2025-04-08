function solution(num_list) {
    var hap = 0;
    var gop = 1;
    for (var i = 0; i < num_list.length; i++) {
        hap += num_list[i];
        gop *= num_list[i];
    }
    hap *= hap;
    if (hap > gop) {
        return 1;
    } else {
        return 0;
    }
}
