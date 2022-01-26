---
hide_table_of_contents: true
---

# OnHammerHit

## Usage

* Called when the player has hit something with a hammer
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHammerHit(BasePlayer player, HitInfo info)
{
    Puts("OnHammerHit works!");
    return null;
}
```
