# 6장


### 전류, 전압, 전력

- 전자 : 원자를 이루는 요소 중 하나로, 음(-)의 전기를 띠는 입자
    - 원자의 구조 : 양(+)의 전기를 띠는 양성자와 전기를 띠지 않는 중성자로 이루어지는 원자핵을 중심으로 그 외각을 층을 이루어 회전하는 전자로 이루어짐.
- 전류 : 전자의 움직임에 의해 만들어지는 전하의 흐름
    - 전류는 양에서 음의 방향으로 흐른다고 생각하지만 실제로 움직이는 것은 전자이며 전자의 흐름은 전류의 흐름과 반대 방향이다.
    
- 자유전자 : 특정 원자핵에 소속되지 않고 자유롭게 움직일 수 있는 전자

- 1A : 1초에 단면을 통과하는 전하의 양이 1쿨롱 일 때의 전류

- 전압 : 전류를 흐르게 하는 힘

- 전력 : 전기 에너지가 일을 할 수 있는 능력. 전류(i)와 전압(v)에 비례하며, 전류와 전압의 곱을 나타냄. 단위는 와트(w)를 사용함  P = V x I

- 배터리 : 전위 차이를 만들어 전류가 흐를 수 있게 해주는 장치

- 정격소비전력  : 한시간 동안 소비하는 전력(단위 : wh, 와트 * 시간)
- 저항 : 전류의 흐름을 방해하는 성질을 띠는 부품
- 전압은 전류와 저항의 크기를 곱한 값 V = IR
- 첫 번째와 두 번째 띠는 저항 값, 세 번째 띠는 승수, 네 번째 띠는 오차범위를 나타냄

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2047c6cb-f04d-4bf3-9128-dee1685eda2d/ccd810dc-6ef0-496a-bf65-e00fd0b14c4b/Untitled.png)

- 가변 저항은 3개의 연결선을 가지고 있고 양쪽 끝 두선이 최소 및 최대 저항 값, 가운데 선은 노브의 위치에 따른 현재 저항 값을 가진다.

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2047c6cb-f04d-4bf3-9128-dee1685eda2d/7185a74a-fac2-4865-b981-7bb25d16362a/Untitled.png)

- 커패시터 : 일시적으로 전기를 저장하는 장치로, 콘덴서 또는 축전지라고도 함.
    - 커패시터에 저장할 수 있는 전기의 양을 나타내기 위한 단위로 패럿(F)를 사용
    - 1F는 1V 전압이 가해질 때 최대 1C의 전하를 저장할 수 있는 용량
    - 커패시터에 전원을 가하면 커패시터 내부에 전기장이 형성되고 커패시터 양단 전압이 전원 전압과 같아질 떄까지 충전됨
    - 커패시터는 충전과 방전을 되풀이 하지만 서서히 충전되고 방전됨

- 마이크로 컨트롤러에서는 전해 커패시터와 세라믹 커패시터가 흔히 사용
    - 전해 커패시터 : 낮은 가격에 큰 용량을 얻을 수 있어 전원 공급 장치에서 전원 안정화를 위해 많이 사용
    - 세라믹 커패시터 : 극성이 없으며 고주파 특성이 좋아 잡음 제거를 위한 필터 회로에 많이 사용

- 반도체
    - n형 반도체 : 여분의 전자가 생기도록 만들어진 반도체(가운데 비소)
    - p형 반도체 : 전자가 모자라도록 만들어진 반도체(가운데 붕소)

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2047c6cb-f04d-4bf3-9128-dee1685eda2d/706b28b3-ee50-40c7-bd18-6dce037bf539/Untitled.png)

- 다이오드 : 주로 한쪽 방향으로 전류가 흐르도록 제어하는 반도체 소자
    - 교류 전원을 직류 전원으로 변환하거나 역방향의 전류로부터 회로를 보호하는 목적으로 많이 사용됨
    - 발광 다이오드 : 순방향으로 전압을 가하면 전자와 정공이 접합면에서 결합하고, 결합 과정에서 빛이 발생
    - 열발생이 적고 수명이 길어 조명기기로 많이 사용

![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2047c6cb-f04d-4bf3-9128-dee1685eda2d/01b6276f-3e51-405f-b9fb-c13b41e5db50/Untitled.png)

- 트랜지스터 : 전기신호를 제어하거나 증폭 하는데 사용되는 반도체
    - npn 트랜지스터 : p형 반도체 1개와 n형 반도체 2개를 접합해서 만든 것
    - pnp 트랜지스터 : p형 반도체 2개와 n형 반도체 1개를 접합해서 만든 것
    
    ![Untitled](https://prod-files-secure.s3.us-west-2.amazonaws.com/2047c6cb-f04d-4bf3-9128-dee1685eda2d/07fcd1b0-91f0-46ff-ba49-e04db5bd7b3f/Untitled.png)
    
- 집적 회로 : 하나의 칩에 회로를 내장하고 패키지화 하여 PCB(Printed Circhit Board)에 실장 할 수 있게 만든 부품
    - 대표적인 예로 마이크로 컨트롤러(ATmega328..)
    - IC에는 트랜지스터 외에도 저항, 다이오드 등 포함

- 그라운드 : 전위 차이를 계산하기 위한 기준점
    - 전압은 상대적인 값
    - 배터리를 사용하는 경우 (-) 전극 부분이 그라운드