---
hide_table_of_contents: true
---

# OnPlayerAttack

## Usage

* Useful for modifying an attack before it goes out
* hitInfo.HitEntity should be the entity that this attack would hit
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnPlayerAttack(BasePlayer attacker, HitInfo info)
{
    Puts("OnPlayerAttack works!");
    return null;
}
```
