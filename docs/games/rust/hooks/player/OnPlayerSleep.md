---
hide_table_of_contents: true
---

# OnPlayerSleep

## Usage

* Called when the player is about to go to sleep
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerSleep(BasePlayer player)
{
    Puts("OnPlayerSleep works!");
    return null;
}
```
