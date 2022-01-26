---
hide_table_of_contents: true
---

# OnFireBallDamage

## Usage

* Called when a fire ball does damage to another entity
* No Return behavior

## Examples

```csharp title=""
void OnFireBallDamage(FireBall fire, BaseCombatEntity entity, HitInfo info)
{
    Puts("OnFireBallDamage works!");
}
```
