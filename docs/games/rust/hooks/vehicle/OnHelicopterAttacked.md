---
hide_table_of_contents: true
---

# OnHelicopterAttacked

## Usage

* DEPRECATED
* Called when a CH47 helicopter is being attacked
* Returning a non-null value overrides default behavior

## Examples

```csharp title=""
object OnHelicopterAttacked(CH47HelicopterAIController heli)
{
    Puts("OnHelicopterAttacked works!");
    return null;
}
```
