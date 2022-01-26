---
hide_table_of_contents: true
---

# OnPlayerDeath

## Usage

* Called when the player is about to die
HitInfo may be null sometimes
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerDeath(BasePlayer player, HitInfo info)
{
    Puts("OnPlayerDeath works!");
    return null;
}
```
