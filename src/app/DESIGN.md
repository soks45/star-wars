# Архитектура проекта
## Общее описание
1) core - максимально изоморфный код. Core не зависит от других частей приложения. Сюда подключаем только глобальные фичи, сквозные сервисы, глобальные токены и т.д. В core нет UI.
2) repositories - слой для получения данных. Здесь находятся модели данных. На этом же уровне валидация и маппинг внешних данных. Может зависеть только от ядра. Репозитории не могут зависеть друг от друга.
3) shared - кроссфичевый код. Расшареные компоненты, общие кроссфичевые сервисы (как пример - сервис настроек пользователя).
4) features - бизнес-фичи. Не могут зависеть друг от друга, но могут зависеть от верхних слоев. Не могут напрямую зависеть от репозиториев других фич.

## Направление зависимостей
**Зависимости направлены в одну сторону**: features -> shared -> repositories -> core. Это зафиксировано в статическом анализаторе кода.

## Арх. схема
```mermaid
flowchart TB
    subgraph Features
        f1[Feat1]
        f2[Feat2]
        f3[Feat3]
        fN[FeatN]
    end
    subgraph Shared
        sharedA[SharedA]
        sharedB[SharedB]
    end
    subgraph Repositories
        repo1[Repo1]
        repo2[Repo2]
        repo3[Repo3]
        repoN[RepoN]
    end
    core[Core]


    f1 --> core
    f1 --> repo1
    f2 --> sharedA
    f3 --> sharedA
    f3 --> sharedB
    fN --> sharedB
    fN --> repoN
    fN --> core

    sharedA --> repo2
    sharedA --> core
    sharedB --> repo3

    repo2 --> core
    repoN --> core

```
