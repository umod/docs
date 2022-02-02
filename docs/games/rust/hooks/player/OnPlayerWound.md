---
hide_table_of_contents: true
---

# OnPlayerWound

## Usage

* Called when the player is about to go down to the 'wounded' state
source might be null, check it before use
* Return a non-null value to override the wounded state

## Examples

```csharp title=""
object OnPlayerWound(BasePlayer player, HitInfo info)
{
    Puts("OnPlayerWound works!");
    return null;
}
```
