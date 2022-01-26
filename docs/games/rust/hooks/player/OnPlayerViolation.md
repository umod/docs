---
hide_table_of_contents: true
---

# OnPlayerViolation

## Usage

* Called when the player triggers an anti-hack violation
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnPlayerViolation(BasePlayer player, AntiHackType type, float amount)
{
    Puts("OnPlayerViolation works!");
    return null;
}
```
