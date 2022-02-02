---
hide_table_of_contents: true
---

# CanHackCrate

## Usage

* Called when a player starts hacking a locked crate
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object CanHackCrate(BasePlayer player, HackableLockedCrate crate)
{
    Puts("CanHackCrate works!");
    return null;
}
```
