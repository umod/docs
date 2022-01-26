---
hide_table_of_contents: true
---

# OnHelicopterKilled

## Usage

* Called when a CH47 helicopter is going to be killed
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHelicopterKilled(CH47HelicopterAIController heli)
{
    Puts("OnHelicopterKilled works!");
    return null;
}
```
