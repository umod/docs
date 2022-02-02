---
hide_table_of_contents: true
---

# OnMeleeAttack

## Usage

* Useful for canceling melee attacks
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnMeleeAttack(BasePlayer player, HitInfo info)
{
    Puts("OnMeleeAttack works!");
    return null;
}
```
