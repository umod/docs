---
hide_table_of_contents: true
---

# OnPlayerMetabolize

## Usage

* Called after the player's metabolism has been changed
* No Return behavior

## Examples

```csharp title=""
void OnPlayerMetabolize(PlayerMetabolism metabolism, BaseCombatEntity entity, float delta)
{
    Puts("OnPlayerMetabolize works!");
}
```
